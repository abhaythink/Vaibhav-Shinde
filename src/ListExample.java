import java.util.ArrayList;

public class ListExample {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");
        fruits.add("Apple"); // duplicate allowed
        
        System.out.println("Fruits: " + fruits);
        
        // Access element
        System.out.println("First fruit: " + fruits.get(0));
        
        // Iterate
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
