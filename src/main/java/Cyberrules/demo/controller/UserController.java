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
    @GetMapping("{userID}")
    public User getUser(@PathVariable Long userID){
        return userService.getUser(userID);
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

    @DeleteMapping("/{userid}")
    public String deleteUser(@PathVariable Long userid)
    {
        return userService.deleteUser(userid);
    }

    @PutMapping("/{userid}")
    public String updateUser(@PathVariable Long userid,@RequestBody User user){
        return userService.updateUser(userid,user);
    }

}
