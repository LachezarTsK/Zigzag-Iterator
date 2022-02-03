
import java.util.List;
import java.util.ArrayList;

public class ZigzagIterator {

    List<List<Integer>> vectors;
    int[] indexes;
    int indexVectors;
    int endedVectors;

    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {
        vectors = new ArrayList<>();
        vectors.add(v1);
        vectors.add(v2);
        indexes = new int[vectors.size()];
    }

    public int next() {
        if (!hasNext()) {
            throw new IndexOutOfBoundsException(indexes[indexVectors] + " of vector " + indexVectors + " is out of bounds!");
        }

        int next = vectors.get(indexVectors).get(indexes[indexVectors]);
        indexes[indexVectors]++;
        getNextIndexVectors();

        return next;
    }

    public boolean hasNext() {
        moveForward();
        return endedVectors < vectors.size();
    }

    public void moveForward() {
        endedVectors = 0;
        while (indexes[indexVectors] == vectors.get(indexVectors).size() && endedVectors < vectors.size()) {
            endedVectors++;
            getNextIndexVectors();
        }
    }

    public void getNextIndexVectors() {
        indexVectors = (indexVectors + 1) % vectors.size();
    }
}
