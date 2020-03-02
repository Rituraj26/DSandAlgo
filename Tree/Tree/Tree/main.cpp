#include<iostream>
#include<queue>
#include<stack>
using namespace std;

template<class T>
class Node {
public:
    Node *left;
    T data;
    Node *right;
};

template<class T>
class Tree {
    
private:
    queue<Node<T>*> q;
    stack<Node<T>*> st;
    Node<T> *root;
    
public:
    
    Node<T> *CreateNode(T);
    void CreateTree();
    void Preorder(Node<T>*);
    void Inorder(Node<T>*);
    void Postorder(Node<T>*);
    void Levelorder(Node<T>*);
    void RPrint();
    
    void IPreorder(Node<T>*);
    void IInorder(Node<T>*);
    void PPostorder(Node<T>*);
    void IPrint();
    
};

template<class T>
Node<T>* Tree<T>::CreateNode(T data) {
    Node<T> *newNode = new Node<T>;
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

template<class T>
void Tree<T>::CreateTree() {
    Node<T> *p, *t;
    T x;
    cout<<"Enter the root data: ";
    cin>>x;
    root = CreateNode(x);
    q.push(root);
    while(!q.empty()) {
        p = q.front();
        q.pop();
        cout<<"Enter the left child of "<<p->data<<": ";
        cin>>x;
        if(x != 'z') {
            t = CreateNode(x);
            p->left = t;
            q.push(t);
        }
        cout<<"Enter the right child of "<<p->data<<": ";
        cin>>x;
        if(x != 'z') {
            t = CreateNode(x);
            p->right = t;
            q.push(t);
        }
    }
}

// Recursive Traversals

template<class T>
void Tree<T>::Preorder(Node<T> *p) {
    if(p) {
        cout<<p->data<<" ";
        Preorder(p->left);
        Preorder(p->right);
    }
}

template<class T>
void Tree<T>::Inorder(Node<T> *p) {
    if(p) {
        Inorder(p->left);
        cout<<p->data<<" ";
        Inorder(p->right);
    }
}

template<class T>
void Tree<T>::Postorder(Node<T> *p) {
    if(p) {
        Postorder(p->left);
        Postorder(p->right);
        cout<<p->data<<" ";
    }
}

// Iterative Traversals

template<class T>
void Tree<T>::IPreorder(Node<T> *t) {
    while(!st.empty() || t != NULL) {
        if(t != NULL) {
            st.push(t);
            cout<<t->data<<" ";
            t = t->left;
        } else {
            t = st.top();
            st.pop();
            t = t->right;
        }
    }
}

// Display

template<class T>
void Tree<T>::RPrint() {
    Preorder(root);
    cout<<endl;
    Inorder(root);
    cout<<endl;
    Postorder(root);
    cout<<endl;
//    Levelorder(root);
    cout<<endl;
}

template<class T>
void Tree<T>::IPrint() {
    Preorder(root);
    cout<<endl;
    Inorder(root);
    cout<<endl;
    Postorder(root);
    cout<<endl;
//    Levelorder(root);
    cout<<endl;
}

int main() {
    
    Tree<char> obj;
    obj.CreateTree();
    obj.RPrint();
    
    return 0;
}
