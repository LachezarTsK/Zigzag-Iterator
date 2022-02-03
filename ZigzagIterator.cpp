
#include<string>
#include<iterator>
#include<vector>
using namespace std;

class ZigzagIterator {
    
public:
    vector<pair<vector<int>::iterator, vector<int>::iterator>> vectors;
    size_t indexVectors;
    int endedVectors;

    ZigzagIterator(vector<int>& v1, vector<int>& v2) {
        vectors.push_back(pair(v1.begin(), v1.end()));
        vectors.push_back(pair(v2.begin(), v2.end()));
        indexVectors = 0;
        endedVectors = 0;
    }

    int next() {
        if (!hasNext()) {
            throw out_of_range("Iterator for vector " + to_string(indexVectors) + " is out of bounds!");
        }

        int next = *vectors[indexVectors].first++;
        getNextIndexAmongLists();

        return next;
    }

    bool hasNext() {
        moveForward();
        return endedVectors < vectors.size();
    }

    void moveForward() {
        endedVectors = 0;
        while (vectors[indexVectors].first == vectors[indexVectors].second && endedVectors < vectors.size()) {
            endedVectors++;
            getNextIndexAmongLists();
        }
    }

    void getNextIndexAmongLists() {
        indexVectors = (indexVectors + 1) % vectors.size();
    }
};
