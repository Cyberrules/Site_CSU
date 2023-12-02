package Cyberrules.demo.controller;
import Cyberrules.demo.model.Meci;
import Cyberrules.demo.service.MeciuriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meci")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})

public class MeciController {
    private MeciuriService meciService;
    @Autowired
    public MeciController(MeciuriService meciService){
        this.meciService = meciService;
    }

    @GetMapping
    public List<Meci> getMeciuri()
    {
        return meciService.getMeciuri();
    }

    @PostMapping
    public String postMeci(@RequestBody Meci meci)
    {
        return meciService.addMeci(meci);
    }

    @DeleteMapping("/{meciID}")
    public String deleteMeci(@PathVariable Long meciID)
    {
        return meciService.deleteMeci(meciID);
    }

    @GetMapping("/{meciID}")
    public Meci getMeci(@PathVariable Long meciID){
        return meciService.getMeci(meciID);
    }

    @GetMapping("editia/{editie}")
    public List<Meci> getMeciEditie(@PathVariable String editie){
        return meciService.getMeciEditie(editie);
    }

    @GetMapping("tip/{tipcampionat}")
    public List<Meci> getMeciTipCampionat(@PathVariable String tipcampionat){
        return meciService.getMeciTipCampionat(tipcampionat);
    }
    @PutMapping("/{meciID}")
    public String updateMeci(@PathVariable Long meciID,@RequestBody Meci meci){
        return meciService.updateMeci(meciID,meci);
    }

}
