package Cyberrules.demo.controller;

import Cyberrules.demo.model.Media;
import Cyberrules.demo.model.Stire;
import Cyberrules.demo.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/media")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE, RequestMethod.PUT})

public class MediaController {
    private MediaService mediaService;
    @Autowired
    public MediaController(MediaService mediaService){
        this.mediaService = mediaService;
    }
    @GetMapping
    public List<Media> getMedia()
    {
        return mediaService.getMedia();
    }
    @PostMapping
    public String addMedia(@RequestBody Media media,@RequestBody Stire stire)
    {
        return mediaService.addMedia(media);
    }
    @DeleteMapping("/{mediaID}")
    public String deleteMedia(@PathVariable Long mediaID)
    {
        return mediaService.deleteMedia(mediaID);
    }
    @GetMapping("/{mediaID}")
    public Media getMedia(@PathVariable Long mediaID){
        return mediaService.getMedia(mediaID);
    }

    @GetMapping("/tipmedia/{tipmedia}")
    public List<Media> getTipMedia(@PathVariable String tipmedia){
        return mediaService.getTipMedia(tipmedia);
    }
    @PutMapping("/{mediaID}")
    public String putMedia(@PathVariable Long mediaID,@RequestBody Media media)
    {
        return mediaService.updateMedia(mediaID,media);
    }
}
