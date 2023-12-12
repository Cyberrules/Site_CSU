package Cyberrules.demo.controller;
import Cyberrules.demo.model.Echipa;
import Cyberrules.demo.model.Meci;
import Cyberrules.demo.service.EchipaService;
import Cyberrules.demo.service.MeciuriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/echipa")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})

public class EchipaController {
    private EchipaService echipaService;
    @Autowired
    public EchipaController(EchipaService echipaService){
        this.echipaService = echipaService;
    }

    @GetMapping
    public List<Echipa> getEchipe()
    {
        return echipaService.getEchipa();
    }

    @PostMapping
    public String postEchipa(@RequestBody Echipa echipa)
    {
        return echipaService.addEchipa(echipa);
    }

    @DeleteMapping("/{echipaID}")
    public String deleteEchipa(@PathVariable Long echipaID)
    {
        return echipaService.deleteEchipa(echipaID);
    }

    @GetMapping("/{meciID}")
    public Echipa getEchipa(@PathVariable Long echipaID){
        return echipaService.getEchipa(echipaID);
    }

    @GetMapping("/categorie/{categorie}")
    public List<Echipa> getEchipaCategorie(@PathVariable String categorie){
        return echipaService.getEchipaCategorie(categorie);
    }
    @GetMapping("/nume/{nume}")
    public List<Echipa> getEchipaNume(@PathVariable String nume){
        return echipaService.getEchipaNume(nume);
    }
    @PutMapping("/{echipaID}")
    public String updateEchipa(@PathVariable Long echipaID,@RequestBody Echipa echipa){
        return echipaService.updateEchipa(echipaID,echipa);
    }
}
