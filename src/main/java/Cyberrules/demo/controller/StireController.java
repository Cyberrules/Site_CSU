package Cyberrules.demo.controller;

import Cyberrules.demo.model.Stire;
import Cyberrules.demo.model.User;
import Cyberrules.demo.service.StireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stire")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE, RequestMethod.PUT})

public class StireController {
    private StireService stireService;
    @Autowired
    public StireController(StireService stireService){
        this.stireService = stireService;
    }
    @GetMapping
    public List<Stire> getStire()
    {
        return stireService.getStire();
    }
    @PostMapping
    public String postStire(@RequestBody Stire stire)
    {
        return stireService.addStire(stire);
    }
    @DeleteMapping("/{stireid}")
    public String deleteStire(@PathVariable Long stireID)
    {
        return stireService.deleteStire(stireID);
    }
    @GetMapping("/{stireid}")
    public Stire getStire(@PathVariable Long stireID){
        return stireService.getStire(stireID);
    }

    @PutMapping("/{stireid}")
    public String putStire(@PathVariable Long stireID,@RequestBody Stire stire)
    {
        return stireService.updateStire(stireID,stire);
    }
}
