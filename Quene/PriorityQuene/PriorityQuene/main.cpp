#include<iostream>
#include<queue>
using namespace std;

template<class T>
class NumPriorityQuene {
    
private:
    queue<char> q1;
    queue<char> q2;
    queue<char> q3;
    
public:
    void PushElement(T, int);
    void Display();
    
};

template<class T>
void NumPriorityQuene<T>::PushElement(T ele, int priority) {
    if(priority == 1)
        q1.push(ele);
    else if(priority == 2)
        q2.push(ele);
    else if(priority == 3)
        q3.push(ele);
    else
        cout<<"Invalid Priority"<<endl;
}

template<class T>
void NumPriorityQuene<T>::Display() {
//    cout<<q1.empty();
    while(!q1.empty()) {
        cout<<q1.front();
        q1.pop();
    }
    while(!q2.empty()) {
        cout<<q2.front();
        q2.pop();
    }
    while(!q3.empty()) {
        cout<<q3.front();
        q3.pop();
    }
    cout<<endl;
}

int main() {
    
    NumPriorityQuene<char> obj;
    obj.PushElement('A', 1);
    obj.PushElement('B', 1);
    obj.PushElement('C', 2);
    obj.PushElement('D', 3);
    obj.PushElement('E', 2);
    obj.PushElement('F', 1);
    obj.PushElement('G', 2);
    obj.PushElement('H', 3);
    obj.PushElement('I', 2);
    obj.PushElement('J', 2);
    obj.PushElement('K', 1);
    obj.Display();
    
    return 0;
}

