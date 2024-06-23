package IRCTC;

import IRCTC.entities.Ticket;
import IRCTC.entities.Train;
import IRCTC.entities.User;
import IRCTC.services.UserBookingService;
import IRCTC.utils.UserServiceUtil;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.util.*;

//@SpringBootApplication
public class IrctcBackendApplication {

	public static void main(String[] args) {

//		SpringApplication.run(IrctcBackendApplication.class, args);
		System.out.println("The IRCTC Backend Application is running");
		Scanner scanner = new Scanner(System.in);
		int option = 0;
		UserBookingService userBookingService = null;
		try{
			userBookingService = new UserBookingService();
		}catch (IOException e){
			System.out.println(e.getMessage());
		}
		while(option != 7){
			System.out.println("Please enter your option:");
			System.out.println("1. Create a new user");
			System.out.println("2. Log in");
			System.out.println("3. Fetch booking");
			System.out.println("4. Search train");
			System.out.println("5. Book a seat");
			System.out.println("6. Cancel my booking");
			System.out.println("7. Exit");

			option = scanner.nextInt();
			switch (option){
				case 1:
					System.out.println("Please enter your username to signup");
					String nameToSignUp = scanner.next();
					System.out.println("Please enter your password to signup");
					String passwordToSignUp = scanner.next();
					User userToSignUp = new User(nameToSignUp, passwordToSignUp, UserServiceUtil.hashPassword(passwordToSignUp), new ArrayList<>(), UUID.randomUUID().toString());
					userBookingService.signUp(userToSignUp);
					break;

				case 2:
					System.out.println("Please enter your username to login");
					String nameToLogin = scanner.next();
					System.out.println("Please enter your password to signup");
					String passwordToLogin = scanner.next();
					User userToLogin = new User(nameToLogin, passwordToLogin, UserServiceUtil.hashPassword(passwordToLogin), new ArrayList<>(), UUID.randomUUID().toString());
					try{
						userBookingService = new UserBookingService(userToLogin);
					}catch (IOException e){
						System.out.println(e.getMessage());
						return;
					}
					break;

				case 3:
					System.out.println("Fetching your bookings");
					userBookingService.fetchBooking();
					break;

				case 4:
					System.out.println("search train");
					System.out.println("Please enter your source station");
					String sourceStation = scanner.next();
					System.out.println("Please enter your destination station");
					String destinationStation = scanner.next();
					List<Train> trains = userBookingService.getTrains(sourceStation, destinationStation);
					int index = 1;
					for(Train train : trains){
						System.out.println("Train #" + index + ": " + train.getTrainNumber());
						for(Map.Entry<String, String> entry : train.getStationTimes().entrySet()){
							System.out.println("Station: "+entry.getKey() + "time: " + entry.getValue());
						}
					}
					break;

				case 5:
					System.out.println("Booking a seat");
					System.out.println("Please enter your source station");
					String source = scanner.next();
					System.out.println("Please enter your destination station");
					String destination = scanner.next();
					List<Train> trainList = userBookingService.getTrains(source, destination);
					int idx = 1;
					for(Train train : trainList){
						System.out.println("Train #" + idx + ": " + train.getTrainNumber());
						for(Map.Entry<String, String> entry : train.getStationTimes().entrySet()){
							System.out.println("Station: "+entry.getKey() + "time: " + entry.getValue());
						}
					}
					System.out.println("Select a train by typing 1, 2, 3...");
					Train trainSelectedForBooking = trainList.get(scanner.nextInt());
					System.out.println("Select a seat out of these seats");
					List<List<Integer>> seats = userBookingService.fetchSeats(trainSelectedForBooking);
					for(List<Integer> row : seats){
						for(Integer val : row){
							System.out.print(val +" ");
						}
						System.out.println();
					}
					System.out.println("Select the seat by typing the row and column");
					int row = scanner.nextInt();
					int column = scanner.nextInt();
					userBookingService.bookTrainSeat(trainSelectedForBooking, row, column);
					break;

				case 6:
					System.out.println("Enter the train ID");
					String trainID = scanner.next();
					try {
						userBookingService.cancelBooking(trainID);
					}catch (IOException e){
						System.out.println(e.getMessage());
					}
					break;
					
				case 7:
					System.out.println("Thanks for using IRCTC Backend Application");
			}

		}
	}

}
