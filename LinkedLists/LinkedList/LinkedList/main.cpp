#include<iostream>
using namespace std;

class Node {
public:
    Node *next;
    int data;
};

class LinkedList {
    
private:
    Node *head;
    Node *tail;
    int length;
    
public:
    LinkedList();
    ~LinkedList();
    Node* CreateNode(int);
    
    // Add Nodes
    
    void AddLast(int);
    void AddFirst(int);
    void AddMiddle(int, int);
    void AddInSorted(int);
    
    // Delete Nodes
    
    void DeleteFirst();
    void DeleteMiddle(int);
    
    // Node Operations
    
    void CountNodes();
    int RCountNodes(Node*);
    int RSumOfNodes(Node*);
    void MaxNode();
//    int RMaxNode(Node*);
    int RLinearSearch(Node*, int);
    void RemoveDuplicatesInSorted();
    void ReverseLinks();
    void RReverseLinks(Node*, Node*);
    
    // IS Check
    
    void IsSorted();
    void IsLoop();
    
    // Display Nodes
    
    void Print();
    void Display();
    void RDisplay(Node*);
    
};

LinkedList::LinkedList() {
    head = NULL;
    tail = NULL;
    length = 0;
}

Node* LinkedList::CreateNode(int data) {
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void LinkedList::AddLast(int data) {
    Node *p = CreateNode(data);
    if(head == NULL) {
        head = p;
    } else {
        tail->next = p;
    }
    tail = p;
    length++;
}

void LinkedList::AddFirst(int data) {
    Node *p = CreateNode(data);
    if(head == NULL) {
        tail = p;
    } else {
        p->next = head;
    }
    head = p;
    length++;
}

void LinkedList::AddMiddle(int pos, int data) {
    Node *prev = head;
    Node *newNode = CreateNode(data);
    if(pos >= length || pos < 0)
        cout<<"Invalid Position"<<endl;
    else {
        for(int i=0; i<pos; i++) {
            prev = prev->next;
        }
        newNode->next = prev->next;
        prev->next = newNode;
        length++;
    }
}

void LinkedList::AddInSorted(int data) {
    Node *prev = NULL;
    Node *curr = head;
    Node *newNode = CreateNode(data);
    if(head == NULL) {
        head = newNode;
        tail = newNode;
    } else {
        while(curr->data < data) {
            prev = curr;
            if(curr->next != NULL)
                curr = curr->next;
            else
                break;
        }
        newNode->next = prev->next;
        prev->next = newNode;
    }
    length++;
}

void LinkedList::DeleteFirst() {
    Node *p = head;
    head = head->next;
    length--;
    delete p;
}

void LinkedList::DeleteMiddle(int pos) {
    Node *prev = head;
    Node *curr = head;
    Node *p = head;
    if(pos >= length || pos < 0)
        cout<<"Invalid Position"<<endl;
    else {
        if(pos == 0) {
            curr = prev->next;
            head = curr;
            p = prev;
        } else {
            for(int i=0; i<pos-1; i++)
                prev = prev->next;
            curr = prev->next->next;
            p = prev->next;
            if(curr == NULL) {
                prev->next = NULL;
            } else {
                prev->next = curr;
            }
        }
        length--;
        delete p;
    }
}

void LinkedList::CountNodes() {
    Node *p = head;
    int count = 0;
    while(p != NULL) {
        count++;
        p = p->next;
    }
    cout<<count<<endl;
}

int LinkedList::RCountNodes(Node *node) {
    if(node == NULL)
        return 0;
    return RCountNodes(node->next) + 1;
}

int LinkedList::RSumOfNodes(Node *node) {
    if(node == NULL)
        return 0;
    return RSumOfNodes(node->next) + node->data;
}

//int LinkedList::RMaxNode(Node *node) {
//    if(node == NULL)
//
//}

void LinkedList::MaxNode() {
    Node *p = head;
    int max = -999;
    while(p != NULL) {
        if(p->data > max)
            max = p->data;
        p = p->next;
    }
    cout<<"Maximum element is: "<<max<<endl;
}

int LinkedList::RLinearSearch(Node *node, int key) {
    if(node == NULL)
        return 0;
    if(node->data == key)
        return 1;
    return RLinearSearch(node->next, key);
}

void LinkedList::RemoveDuplicatesInSorted() {
    Node *prev = head;
    Node *curr = head->next;
    Node *p = curr;
    while(curr != NULL) {
        if(prev->data == curr->data) {
            p = curr;
            prev->next = curr->next;
            delete p;
            length--;
        }
        prev = prev->next;
        curr = curr->next;
    }
}

void LinkedList::ReverseLinks() {
    Node *prev = NULL;
    Node *curr = NULL;
    Node *next = head;
    tail = next;
    while(next != NULL) {
        prev = curr;
        curr = next;
        next = next->next;
        curr->next = prev;
    }
    head = curr;
}

void LinkedList::RReverseLinks(Node *prev, Node *next) {
    tail = head;
    if(next == NULL)
        head = prev;
    else {
        RReverseLinks(next, next->next);
        next->next = prev;
    }
}

void LinkedList::IsSorted() {
    Node *prev = head;
    Node *curr = head->next;
    while(curr != NULL) {
        if(curr->data < prev->data) {
            cout<<"List is not sorted"<<endl;
            break;
        }
        if(curr->next == NULL) {
            cout<<"List is sorted"<<endl;
            break;
        }
        curr = curr->next;
        prev = prev->next;
    }
}

void LinkedList::IsLoop() {
    Node *prev = head;
    Node *next = head;
//    tail->next = head->next;
    do {
        prev = prev->next;
        next = next->next;
        next = next ? next->next : next;
    } while(prev && next && prev != next);
    if(prev == next)
        cout<<"Loop is present"<<endl;
    else
        cout<<"Loop is not present"<<endl;
}

void LinkedList::Print() {
    cout<<"No of Nodes are: "<<RCountNodes(head)<<endl;
    cout<<"Sum of Nodes is: "<<RSumOfNodes(head)<<endl;
//    cout<<"Max element is: "<<RMaxNode(head)<<endl;
    if(RLinearSearch(head, 2))
        cout<<"Element found"<<endl;
    else
        cout<<"Element not found"<<endl;
    RReverseLinks(NULL, head);
    RDisplay(head);
}

void LinkedList::Display() {
    Node *p = head;
    while(p != NULL) {
        cout<<p->data<<" ";
        p = p->next;
    }
}

void LinkedList::RDisplay(Node *node) {
    if(node == NULL)
        return;
    cout<<node->data<<" ";
    RDisplay(node->next);
}

LinkedList::~LinkedList() {
    cout<<"Obj is deleted"<<endl;
}

int main() {
    LinkedList obj, obj2;
    obj.AddLast(5);
    obj.AddLast(10);
    obj.AddLast(15);
    obj.AddFirst(0);
    obj.AddMiddle(1, 7);
    obj.AddInSorted(13);
    obj.DeleteFirst();
    obj.DeleteMiddle(3);
    obj.CountNodes();
    obj.MaxNode();
    obj.AddInSorted(15);
    obj.RemoveDuplicatesInSorted();
    obj.ReverseLinks();
    obj.IsSorted();
    obj.IsLoop();
//    obj.Print();
    obj.Display();
    
//    obj2.AddFirst(100);
//    obj2.AddLast(120);
//    obj2.AddInSorted(111);
    
    return 0;
}
