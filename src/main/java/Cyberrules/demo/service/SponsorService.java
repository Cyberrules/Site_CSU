package Cyberrules.demo.service;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Cyberrules.demo.model.Sponsor;
import org.springframework.stereotype.Service;

@Service
public class SponsorService {
    private static final String URL = "jdbc:postgresql://localhost:5432/postgres";
    private static final String USER = "postgres";
    private static final String PASSWORD = "cyberrules";
    public List<Sponsor> getSponsors() {
        List<Sponsor> sponsors = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM Sponsori")) {

            while (rs.next()) {
                Sponsor sponsor = new Sponsor(
                        rs.getLong("SponsorID"),
                        rs.getString("CaleImagine"),
                        rs.getString("NumeComplet"),
                        rs.getString("LinkSiteExtern"),
                        rs.getString("Editia"),
                        rs.getBoolean("isDeleted")
                );
                sponsors.add(sponsor);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return sponsors;
    }
    public String addSponsor(Sponsor sponsor)
    {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO Sponsori (CaleImagine, NumeComplet, LinkSiteExtern, Editia, isDeleted) VALUES (?, ?, ?, ?, ?)",
                     Statement.RETURN_GENERATED_KEYS)) {

            ps.setString(1, sponsor.getCaleImagine());
            ps.setString(2, sponsor.getNumeComplet());
            ps.setString(3, sponsor.getLinkSiteExtern());
            ps.setString(4, sponsor.getEditia());
            ps.setBoolean(5, sponsor.isDeleted());

            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "Creating sponsor failed, no rows affected.";
            }
            else{
                return "Sponsor added successfully";
            }

        } catch (SQLException e) {
            return "Failed to add sponsor - " + e.getMessage();
        }
    }

    public String deleteSponsor(Long sponsorID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Sponsori WHERE SponsorID = ?")) {

            ps.setLong(1, sponsorID);

            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "No sponsor found with ID: "+sponsorID;
            }
            else{
                return "Sponsor with ID " + sponsorID + " deleted successfully";
            }

        } catch (SQLException e) {
            return "Failed to delete sponsor - " + e.getMessage();
        }
    }
}
