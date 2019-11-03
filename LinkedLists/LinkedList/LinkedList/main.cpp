#include<iostream>
using namespace std;

class LinkedList {
    
private:
    int *A;
    int n;
    
public:
    
    LinkedList() {
        n = 2;
        A = new int[n];
    }
    LinkedList(int n) {
        this->n = n;
        A = new int[n];
    }
    
    void Display();
    
    ~LinkedList() {
        delete []A;
    }
};

int main() {
    int n = 5;
    LinkedList m(n);
    return 0;
}
