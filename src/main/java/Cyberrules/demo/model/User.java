package Cyberrules.demo.model;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import lombok.Data;
import jakarta.persistence.*;

import java.util.Set;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "nume")
    private String Nume;

    @Column(name = "prenume")
    private String Prenume;

    @Column(name = "passwordhash")
    private String Passwordhash;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "username", referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private Set<Role> roles;

    public User() {
    }

    public User(String username, String nume, String prenume, String passwordhash) {
        this.username = username;   // Use 'this' to refer to the instance variable
        Nume = nume;
        Prenume = prenume;
        Passwordhash = passwordhash;
    }

    @JsonProperty("username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;   // Use 'this' to refer to the instance variable
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
}
