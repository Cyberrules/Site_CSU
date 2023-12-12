package Cyberrules.demo.controller;

import Cyberrules.demo.model.Jucator;
import Cyberrules.demo.model.Sponsor;
import Cyberrules.demo.service.JucatorService;
import Cyberrules.demo.service.SponsorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jucator")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE, RequestMethod.PUT})
public class JucatorController {
    private JucatorService jucatorService;
    @Autowired
    public JucatorController(JucatorService jucatorService){
        this.jucatorService = jucatorService;
    }
    @GetMapping
    public List<Jucator> getJucatori()
    {
        return jucatorService.getJucatori();
    }
    @GetMapping("/{jucatorID}")
    public Jucator getJucator(@PathVariable Long jucatorID)
    {
        return jucatorService.getJucator(jucatorID);
    }
    @GetMapping("/echipa/{echipaID}")
    public List<Jucator> getJucatoriEchipa(@PathVariable Long echipaID)
    {
        return jucatorService.getJucatoriEchipa(echipaID);
    }
    @GetMapping("/nume/{numeJucator}")
    public List<Jucator> getJucatoriNume(@PathVariable String numeJucator)
    {
        return jucatorService.getJucatoriNume(numeJucator);
    }
    @GetMapping("/prenume/{prenumeJucator}")
    public List<Jucator> getJucatoriPrenume(@PathVariable String prenumeJucator)
    {
        return jucatorService.getJucatoriPrenume(prenumeJucator);
    }
    @PostMapping
    public String postJucator(@RequestBody Jucator jucator)
    {
        return jucatorService.addJucator(jucator);
    }
    @DeleteMapping("/{jucatorID}")
    public String deleteJucator(@PathVariable Long jucatorID)
    {
        return jucatorService.deleteJucator(jucatorID);
    }
    @PutMapping("/{jucatorID}")
    public String putJucator(@RequestBody Jucator jucator)
    {
        return jucatorService.putJucator(jucator);
    }
}
