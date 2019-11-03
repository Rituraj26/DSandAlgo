#include<iostream>
using namespace std;

class Matrices {
    
private:
    int *A;
    int n;
    
public:
    
    Matrices() {
        n = 2;
        A = new int[n];
    }
    Matrices(int n) {
        this->n = n;
        A = new int[n];
    }
    
    void SetDiagonal(int, int, int);
    void GetDiagonal(int, int);
    
//    void LowerTriangularMat(int)
    
    void Display();
    
    ~Matrices() {
        delete []A;
    }
};

void Matrices::SetDiagonal(int i, int j, int x) {
    if(i == j)
        A[i-1] = x;
}

void Matrices::GetDiagonal(int i, int j) {
    if(i == j)
        cout<<A[i-1]<<endl;
    else
        cout<<"Invalid Position"<<endl;
}

void Matrices::Display() {
    int i, j;
    for(i=0; i<n; i++) {
        for(j=0; j<n; j++) {
            if(i == j)
                cout<<A[i-1]<<" ";
            else
                cout<<0<<" ";
        }
        cout<<endl;
    }
}

int main() {
    int n = 5;
    Matrices m(n);
    m.SetDiagonal(2, 2, 5);
    m.SetDiagonal(1, 1, 3);
    m.GetDiagonal(2, 2);
    m.Display();
    return 0;
}
