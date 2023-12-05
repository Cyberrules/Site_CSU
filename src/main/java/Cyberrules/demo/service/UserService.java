package Cyberrules.demo.service;

import Cyberrules.demo.model.BCrypt;
import Cyberrules.demo.model.Meci;
import Cyberrules.demo.model.User;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private static final String URL = "jdbc:postgresql://localhost:5432/cyberrules";
    private static final String USER = "postgres";
    private static final String PASSWORD = "cyberrules";
    public static String encryptPassword(String password) {
        // Generare salt random
        String salt = BCrypt.gensalt(12);

        // Criptează parola cu salt-ul generat
        return BCrypt.hashpw(password, salt);
    }

    public static boolean checkPassword(String candidatePassword, String storedPassword) {
        // Verifică dacă parola introdusă corespunde cu cea stocată
        return BCrypt.checkpw(candidatePassword, storedPassword);
    }
    public List<User> getUsers() {
        List<User> users = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM Users")) {

            while (rs.next()) {
                User user = new User(
                        rs.getLong("userid"),
                        rs.getString("username"),
                        rs.getString("nume"),
                        rs.getString("prenume"),
                        rs.getString("passwordhash"),
                        rs.getString("usertype"),
                        rs.getBoolean("isDeleted")
                );

                users.add(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return users;
    }
    public String addUser(User user)
    {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(
                     "INSERT INTO users( username, nume, prenume, passwordhash, usertype, isdeleted) VALUES (?, ?, ?, ?, ?, ?)",
                     Statement.RETURN_GENERATED_KEYS)) {


            String hashedPassword = encryptPassword(user.getPasswordhash());
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getNume());
            ps.setString(3, user.getPrenume());
            ps.setString(4, hashedPassword);
            ps.setString(5, user.getUsertype());
            ps.setBoolean(6, user.isDeleted());

            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "Creating user failed, no rows affected.";
            } else {
                return "User added successfully";
            }

        } catch (SQLException e) {
            return "Failed to add user - " + e.getMessage();
        }
    }

    public String deleteUser(Long userID) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Users WHERE Userid = ?")) {

            ps.setLong(1, userID);


            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return "No user found with ID: "+userID;
            }
            else{
                return "User with ID " + userID + " deleted successfully";
            }

        } catch (SQLException e) {
            return "Failed to delete user - " + e.getMessage();
        }
    }
    public String updateUser(Long userID, User user) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {

            String updateQuery = "UPDATE Users\n" +
                    "\tSET username=?, nume=?, prenume=?, passwordhash=?, usertype=?, isdeleted=?\n" +
                    "\tWHERE userid=?";

            try (PreparedStatement ps = conn.prepareStatement(updateQuery)) {
                String hashedPassword = BCrypt.hashpw(user.getPasswordhash(), BCrypt.gensalt());
                ps.setString(1, user.getUsername());
                ps.setString(2, user.getNume());
                ps.setString(3, user.getPrenume());
                ps.setString(4,hashedPassword);
                ps.setString(5, user.getUsertype());
                ps.setBoolean(6, user.isDeleted());
                ps.setLong(7, userID);
                int affectedRows = ps.executeUpdate();

                if (affectedRows == 0) {
                    return "No user found with ID: " + userID;
                } else {
                    return "User with ID " + userID + " updated successfully";
                }
            }
        } catch (SQLException e) {
            return "Failed to update user - " + e.getMessage();
        }
    }
}
