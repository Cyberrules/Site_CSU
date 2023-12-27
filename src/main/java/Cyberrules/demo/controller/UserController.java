package Cyberrules.demo.controller;

import Cyberrules.demo.model.Meci;
import Cyberrules.demo.model.User;
import Cyberrules.demo.service.MeciuriService;
import Cyberrules.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
public class UserController {
    private UserService userService;
    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers()
    {
        return userService.getUsers();
    }
    @GetMapping("/{username}")
    public User getUser(@PathVariable String username){
        return userService.getUser(username);
    }
    @GetMapping("nume/{nume}")
    public List<User> getUserNume(@PathVariable String nume){
        return userService.getUserNume(nume);
    }
    @GetMapping("prenume/{prenume}")
    public List<User> getUserPrenume(@PathVariable String prenume){
        return userService.getUserPrenume(prenume);
    }
    @GetMapping("type/{usertype}")
    public List<User> getUserType(@PathVariable String usertype){
        return userService.getUserType(usertype);
    }

    @PostMapping
    public String postUsers(@RequestBody User user)
    {
        return userService.addUser(user);
    }

    @DeleteMapping("/{username}")
    public String deleteUser(@PathVariable String username)
    {
        return userService.deleteUser(username);
    }

    @PutMapping("/{username}")
    public String updateUser(@PathVariable String username,@RequestBody User user){
        return userService.updateUser(username,user);
    }

}
