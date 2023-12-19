package Cyberrules.demo.model;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Media {
    private Long mediaId;
    private String tipmedia;
    private Long stireid;
    private byte[] media;
    private boolean isDeleted;

    public Media() {
    }

    public Media(Long mediaId, String tipmedia, Long stireId, byte[] media, boolean isDeleted) {
        this.mediaId = mediaId;
        this.tipmedia = tipmedia;
        this.stireid = stireId;
        this.media = media;
        this.isDeleted = isDeleted;
    }

    @JsonProperty("mediaID")

    public Long getMediaId() {
        return mediaId;
    }

    public void setMediaId(Long mediaId) {
        this.mediaId = mediaId;
    }

    @JsonProperty("tipmedia")

    public String getTipmedia() {
        return tipmedia;
    }

    public void setTipmedia(String tipmedia) {
        this.tipmedia = tipmedia;
    }

    @JsonProperty("stireid")

    public Long getStireId() {
        return stireid;
    }

    public void setStireId(Long stireId) {
        this.stireid = stireId;
    }

    @JsonProperty("media")

    public byte[] getMedia() {
        return media;
    }

    public void setMedia(byte[] media) {
        this.media = media;
    }

    @JsonProperty("isDeleted")

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
