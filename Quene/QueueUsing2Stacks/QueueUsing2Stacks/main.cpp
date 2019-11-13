#include<iostream>
#include<stack>
using namespace std;

template<class T>
class QueueUsing2Stacks {
    
private:
    stack<T> s1;
    stack<T> s2;
    T arr[10];
    
public:
    void Enqueue(T);
    void Dequeue();
    
};

template<class T>
void QueueUsing2Stacks<T>::Enqueue(T ele) {
    s1.push(ele);
}

template<class T>
void QueueUsing2Stacks<T>::Dequeue() {
    T x;
    if(s2.empty()) {
        if(s1.empty())
            cout<<"Queue is empty"<<endl;
        else {
            while(!s1.empty()) {
                x = s1.top();
                s1.pop();
                s2.push(x);
            }
        }
    }
    if(!s2.empty()) {
        x = s2.top();
        s2.pop();
        cout<<x<<" ";
    } else
        cout<<"Queue is empty"<<endl;
}

int main() {
    
    QueueUsing2Stacks<char> obj;
    obj.Enqueue('a');
    obj.Enqueue('b');
    obj.Enqueue('c');
    obj.Enqueue('d');
    obj.Dequeue();
    obj.Dequeue();
    obj.Dequeue();
    obj.Dequeue();
    obj.Dequeue();
    
    return 0;
}

