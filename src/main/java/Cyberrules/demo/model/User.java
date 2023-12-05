package Cyberrules.demo.model;
import com.fasterxml.jackson.annotation.JsonProperty;

public class User {

    private Long Userid;
    private String Username;
    private String Nume;
    private String Prenume;
    private String Passwordhash;
    private String Usertype;
    private boolean isDeleted;

    public User() {
    }

    public User(Long userid, String username, String nume, String prenume, String passwordhash, String usertype, boolean isDeleted) {
        Userid = userid;
        Username = username;
        Nume = nume;
        Prenume = prenume;
        Passwordhash = passwordhash;
        Usertype = usertype;
        this.isDeleted = isDeleted;
    }

    @JsonProperty("Userid")
    public Long getUserid() {
        return Userid;
    }

    public void setUserid(Long userid) {
        Userid = userid;
    }

    @JsonProperty("username")
    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }
    @JsonProperty("nume")
    public String getNume() {
        return Nume;
    }

    public void setNume(String nume) {
        Nume = nume;
    }
    @JsonProperty("prenume")
    public String getPrenume() {
        return Prenume;
    }

    public void setPrenume(String prenume) {
        Prenume = prenume;
    }

    @JsonProperty("password")
    public String getPasswordhash() {
        return Passwordhash;
    }

    public void setPasswordhash(String passwordhash) {
        Passwordhash = passwordhash;
    }

    @JsonProperty("usertype")
    public String getUsertype() {
        return Usertype;
    }

    public void setUsertype(String usertype) {
        Usertype = usertype;
    }
    @JsonProperty("isDeleted")
    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}