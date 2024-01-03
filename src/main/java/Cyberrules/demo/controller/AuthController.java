package Cyberrules.demo.controller;

import Cyberrules.demo.model.Role;
import Cyberrules.demo.model.User;
import Cyberrules.demo.payload.LoginDto;
import Cyberrules.demo.payload.SignUpDto;
import Cyberrules.demo.repository.RoleRepository;
import Cyberrules.demo.repository.UserRepository;
import Cyberrules.demo.security.JwtConstants;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.security.Key;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(methods = {RequestMethod.POST})
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDto loginDto){
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginDto.getUsername(), loginDto.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            // Generate JWT token
            String token = generateJwtToken(authentication);
            return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (AuthenticationException e) {
            // Handle authentication failure
            return new ResponseEntity<>("Authentication failed.", HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto){

        // add check for username exists in a DB
        if(userRepository.existsByUsername(signUpDto.getUsername())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

        // create user object
        User user = new User();
        user.setNume(signUpDto.getNume());
        user.setPrenume(signUpDto.getPrenume());
        user.setUsername(signUpDto.getUsername());
        user.setPasswordhash(passwordEncoder.encode(signUpDto.getPassword()));

        Set<Cyberrules.demo.model.Role> roles = new HashSet<>();
        Role role = roleRepository.findByName("ROLE_USER").orElseThrow(() -> new RuntimeException("Role not found"));
        roles.add(role);
        user.setRoles(roles);

        userRepository.save(user);

        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }
    private String generateJwtToken(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        // Extract additional user information
        User user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Create claims for JWT payload
        Map<String, Object> claims = new HashMap<>();
        claims.put("nume", user.getNume());
        claims.put("prenume", user.getPrenume());

        // Extract roles and add them to claims
        Set<String> roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
        claims.put("roles", roles);

        // Use Keys.secretKeyFor to generate a secure key for HS512
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512);

        // Build JWT with claims
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + JwtConstants.EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }

}
