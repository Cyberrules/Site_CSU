package Cyberrules.demo.controller;

import Cyberrules.demo.model.Sponsor;
import Cyberrules.demo.service.SponsorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sponsor")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
public class SponsorController {
    private SponsorService sponsorService;
    @Autowired
    public SponsorController(SponsorService sponsorService){
        this.sponsorService = sponsorService;
    }
    @GetMapping
    public List<Sponsor> getSponsors()
    {
        return sponsorService.getSponsors();
    }
    @PostMapping
    public String postSponsor(@RequestBody Sponsor sponsor)
    {
        return sponsorService.addSponsor(sponsor);
    }
    @DeleteMapping("/{sponsorID}")
    public String deleteSponsor(@PathVariable Long sponsorID)
    {
        return sponsorService.deleteSponsor(sponsorID);
    }
    @GetMapping("/{sponsorID}")
    public Sponsor getSponsor(@PathVariable Long sponsorID){
        return sponsorService.getSponsor(sponsorID);
    }
}
