package Cyberrules.demo.service;

import Cyberrules.demo.model.Jucator;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
@Service
public class JucatorService {
    private static final String URL = "jdbc:postgresql://localhost:5432/cyberrules";
    private static final String USER = "postgres";
    private static final String PASSWORD = "cyberrules";
    private Jucator buildJucatorFromResultSet(ResultSet rs) throws SQLException {
        return new Jucator(
                rs.getLong("JucatorID"),
                rs.getString("Nume"),
                rs.getString("Prenume"),
                rs.getString("Post"),
                rs.getInt("Numar"),
                rs.getString("DataNasterii"),
                rs.getString("Nationalitate"),
                rs.getDouble("Inaltime"),
                rs.getString("Descriere"),
                rs.getString("CaleImagine"),
                rs.getLong("EchipaID"),
                rs.getBoolean("isDeleted")
        );
    }

    public List<Jucator> getJucatori() {
        List<Jucator> jucatori = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM Jucatori")){
            while(rs.next())
            {
                Jucator jucator = buildJucatorFromResultSet(rs);
                jucatori.add(jucator);
            }

        }catch (SQLException e){
            e.printStackTrace();
        }
        return jucatori;
    }
    public Jucator getJucator(Long jucatorID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Jucatori WHERE JucatorID = ?")){
            ps.setLong(1,jucatorID);
            ResultSet rs = ps.executeQuery();
            while(rs.next()) {
                Jucator jucator = buildJucatorFromResultSet(rs);
                return jucator;
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
        return null;
    }
    public List<Jucator> getJucatoriEchipa(Long echipaID) {
        List<Jucator> jucatori = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Jucatori WHERE EchipaID = ?")){
            ps.setLong(1,echipaID);
            ResultSet rs = ps.executeQuery();
            while(rs.next()) {
                Jucator jucator = buildJucatorFromResultSet(rs);
                jucatori.add(jucator);
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
        return jucatori;
    }

    public List<Jucator> getJucatoriNume(String numeJucator) {
        List<Jucator> jucatori = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Jucatori WHERE Nume = ?")){
            ps.setString(1,numeJucator);
            ResultSet rs = ps.executeQuery();
            while(rs.next()) {
                Jucator jucator = buildJucatorFromResultSet(rs);
                jucatori.add(jucator);
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
        return jucatori;
    }

    public List<Jucator> getJucatoriPrenume(String prenumeJucator) {
        List<Jucator> jucatori = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Jucatori WHERE Prenume = ?")){
            ps.setString(1,prenumeJucator);
            ResultSet rs = ps.executeQuery();
            while(rs.next()) {
                Jucator jucator = buildJucatorFromResultSet(rs);
                jucatori.add(jucator);
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
        return jucatori;
    }

    public String addJucator(Jucator jucator) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO Jucatori (Nume, Prenume, Post, Numar, DataNasterii, Nationalitate, Inaltime, Descriere, CaleImagine, EchipaID, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                     Statement.RETURN_GENERATED_KEYS)){
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
            java.util.Date parsedDate = dateFormat.parse(jucator.getDataNasterii());
            Date sqlDate = new Date(parsedDate.getTime());
            System.out.println(jucator.getNationaliate());
            ps.setString(1,jucator.getNume());
            ps.setString(2,jucator.getPrenume());
            ps.setString(3,jucator.getPozitie());
            ps.setInt(4,jucator.getNumar());
            ps.setDate(5,sqlDate);
            ps.setString(6,jucator.getNationaliate());
            ps.setDouble(7,jucator.getInaltime());
            ps.setString(8,jucator.getDescriere());
            ps.setString(9,jucator.getCaleImagine());
            ps.setLong(10,jucator.getEchipaID());
            ps.setBoolean(11,jucator.isDeleted());

            int affectedRows = ps.executeUpdate();
            if (affectedRows == 0) {
                return "Creating jucator failed, no rows affected.";
            }
            else{
                return "Jucator added successfully";
            }
        } catch (SQLException e){
            return "Failed to add jucator - " + e.getMessage();
        } catch (ParseException e) {
            return "Failed to convert the birth date provided. Make sure the date is in format dd/mm/yyyy.";
        }
    }

    public String deleteJucator(Long jucatorID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Jucatori WHERE JucatorID = ?")) {
            ps.setLong(1, jucatorID);

            int affectedRows = ps.executeUpdate();
            if (affectedRows == 0) {
                return "No jucator found with ID: "+jucatorID;
            }
            else{
                return "Jucator with ID " + jucatorID + " deleted successfully";
            }
        } catch (SQLException e) {
            return "Failed to delete jucator - " + e.getMessage();
        }
    }

    public String putJucator(Jucator jucator) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("UPDATE Jucatori SET Nume = ?, Prenume = ?, Post = ?, Numar = ?, DataNasterii = ?, Nationalitate = ?, Inaltime = ?, Descriere = ?, CaleImagine = ?, EchipaID = ?, isDeleted = ? " +
                     "WHERE JucatorID = ?")){
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
            java.util.Date parsedDate = dateFormat.parse(jucator.getDataNasterii());
            Date sqlDate = new Date(parsedDate.getTime());

            ps.setString(1,jucator.getNume());
            ps.setString(2,jucator.getPrenume());
            ps.setString(3,jucator.getPozitie());
            ps.setInt(4,jucator.getNumar());
            ps.setDate(5,sqlDate);
            ps.setString(6,jucator.getNationaliate());
            ps.setDouble(7,jucator.getInaltime());
            ps.setString(8,jucator.getDescriere());
            ps.setString(9,jucator.getCaleImagine());
            ps.setLong(10,jucator.getEchipaID());
            ps.setBoolean(11,jucator.isDeleted());
            ps.setLong(12,jucator.getJucatorID());

            int affectedRows = ps.executeUpdate();
            if (affectedRows == 0) {
                return "No jucator found with ID: "+jucator.getJucatorID();
            }
            else{
                return "Jucator with ID " + jucator.getJucatorID() + " updated successfully";
            }

        }catch (SQLException e){
            return "Failed to update jucator - " + e.getMessage();
        } catch (ParseException e) {
            return "Failed to convert the birth date provided. Make sure the date is in format dd/mm/yyyy.";
        }
    }
}
