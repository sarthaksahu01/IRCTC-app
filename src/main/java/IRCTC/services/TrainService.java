package IRCTC.services;

import IRCTC.entities.Train;
import IRCTC.entities.User;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.sql.ast.tree.expression.Star;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TrainService {
    private Train train;
    private static final String TRAIN_PATH = "IRCTC App/src/main/java/IRCTC/localDB/trains.json";
    ObjectMapper objectMapper = new ObjectMapper();
    private List<Train> trainList = new ArrayList<>();
    private List<Train> trainListNew = new ArrayList<>();

    public TrainService(Train train) throws IOException{
        this.train = train;
        loadTrains();

    }

    public TrainService() throws IOException
    {
        loadTrains();

        Train t1 = new Train();
        t1.setTrainId("raj334");
        t1.setTrainName("rajdhani");
        t1.setTrainNumber("67009");
        List<List<Integer>> seats = new ArrayList<>(Arrays.asList(Arrays.asList(0, 0, 0, 0, 0), Arrays.asList(0, 0, 0, 0, 0)));
        t1.setSeats(seats);
        Map<String, String> stationTimes = Map.of(
                "Bangalore", "12:50:00",
                "Hyderabad", "18:30:00",
                "Bhopal", "23:09:00"
        );
        t1.setStationTimes(stationTimes);
        t1.setStations(Arrays.asList("Bangalore","Hyderabad","Bhopal"));
    }

    public List<Train> loadTrains() throws IOException
    {
        File trains =  new File("C:\\Users\\Lenovo\\Desktop\\demo_webd\\IRCTC App\\src\\main\\java\\IRCTC\\localDb\\trains.json");
        System.out.println("file ----> " + trains.getAbsolutePath());
        trainList = objectMapper.readValue(trains, List.class);
        System.out.println("trainList ----> " + trainList);

        Train t1 = new Train();
        t1.setTrainId(trainList.get(0).getTrainId());
        t1.setTrainName(trainList.get(0).getTrainName());
        t1.setTrainNumber(trainList.get(0).getTrainNumber());
        t1.setSeats(trainList.get(0).getSeats());
        t1.setStationTimes(trainList.get(0).getStationTimes());
        t1.setStations(Arrays.asList("Bangalore","Hyderabad","Bhopal"));
        System.out.println("t1 ---> " + t1);

        Train t2 = new Train();
        t2.setTrainId(trainList.get(1).getTrainId());
        t2.setTrainName(trainList.get(1).getTrainName());
        t2.setTrainNumber(trainList.get(1).getTrainNumber());
        t2.setSeats(trainList.get(1).getSeats());
        t2.setStationTimes(trainList.get(1).getStationTimes());
        t2.setStations(Arrays.asList("Bangalore","Hyderabad","Bhopal"));
        System.out.println("t2 ---> " + t2);

        trainListNew.add(t1);
        trainListNew.add(t2);

        return trainListNew;
    }



    public List<Train> searchTrains(String sourceStation, String destinationStation)
    {
        System.out.println("trainListNew ---> " + trainListNew);
        return trainListNew.stream().filter(train -> validTrain(train, sourceStation, destinationStation)).collect(Collectors.toList());
    }

    public boolean validTrain(Train train, String sourceStation, String destinationStation)
    {
        List<String> stationOrder = train.getStations();
        int sourceIndex = stationOrder.indexOf(sourceStation);
        int destinationIndex = stationOrder.indexOf(destinationStation);
        return sourceIndex != -1 && destinationIndex != -1 && sourceIndex < destinationIndex;
    }

    public List<List<Integer>> seatsAvailable(Train trainSelectedForBooking) {
        List<List<Integer>> seats = new ArrayList<>();
        List<Integer> row = new ArrayList<>(Arrays.asList(0, 0, 0, 0, 0));
        for(int i = 1; i < 5; i++){
            seats.add(row);
        }
        return seats;
    }

}
