import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class KeyGenerator {

    // Function to generate a secret key for HS512 encryption
    public static String generateHMACSHA512SecretKey() {
        // Use a secure random number generator
        SecureRandom secureRandom = new SecureRandom();

        // Generate a byte array with a secure random key
        byte[] keyBytes = new byte[64];
        secureRandom.nextBytes(keyBytes);

        // Encode the byte array to Base64 to get a string representation of the key
        String base64Key = Base64.getEncoder().encodeToString(keyBytes);

        // Create a SecretKey object from the byte array
        SecretKey secretKey = new SecretKeySpec(keyBytes, "HmacSHA512");

        // Print or store the key securely (do not expose it in your code)
        System.out.println("Generated HS512 Secret Key: " + base64Key);

        // Return the key as a string (you may return it as a SecretKey if needed)
        return base64Key;
    }

    public static void main(String[] args) {
        generateHMACSHA512SecretKey();
    }
}
