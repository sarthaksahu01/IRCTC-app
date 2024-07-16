package IRCTC.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@Builder
public class Train implements Serializable
{
    @Serial
    private static final long serialVersionUID = 1L;
    private String trainId;
    private String trainName;
    private String trainNumber;
    private List<List<Integer>> seats;
    private Map<String, String> stationTimes;
    private List<String> stations;

    public Train() {}

    public Train(String trainId, String trainName, String trainNumber, List<List<Integer>> seats, Map<String, String> stationTimes, List<String> stations)
    {
        this.trainId = trainId;
        this.trainName = trainName;
        this.trainNumber = trainNumber;
        this.seats = seats;
        this.stationTimes = stationTimes;
        this.stations = stations;
    }


    public String printTrainInfo()
    {
        return String.format("Train ID: %s Train number: %s", this.trainId, this.trainNumber);
    }
}
