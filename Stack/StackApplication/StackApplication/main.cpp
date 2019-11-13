#include<iostream>
#include<stack>
using namespace std;

class StackApplication {

public:
    bool ParenthesisMatching(string);
    bool AllParenthesisMatching(string);
    int IsOperand(char);
    int Precedence(char);
    void IntoPost(string);
    void PosttoIn(string);
    void Print(bool);
};

bool StackApplication::ParenthesisMatching(string exp) {
    stack<char> st;
    for(int i=0; i<exp.length(); i++) {
        if(exp[i] == '(')
            st.push(exp[i]);
        else if(exp[i] == ')')
            st.pop();
    }
    //st.size();
    if(st.empty())
        return true;
    else
        return false;
}

bool StackApplication::AllParenthesisMatching(string exp) {
    stack<int> st;
    char x;
    for(int i=0; i<exp.length(); i++) {
        if(exp[i] == '(' || exp[i] == '[' || exp[i] == '{')
            st.push(exp[i]);
        switch (exp[i]) {
            case ')':
                x = st.top();
                st.pop();
                if(x == '[' || x == '{')
                    return false;
                break;
                
            case ']':
                x = st.top();
                st.pop();
                if(x == '}' || x == ')')
                    return false;
                break;
                
            case '}':
                x = st.top();
                st.pop();
                if(x == ']' || x == ')')
                    return false;
                break;
        }
    }
    if(st.empty())
        return true;
    return false;
}

int StackApplication::IsOperand(char c) {
    if(c == '+' || c == '-' || c == '/' || c == '*')
        return 0;
    else
        return 1;
}

int StackApplication::Precedence(char c) {
    if(c == '+' || c == '-')
        return 1;
    else if(c == '*' || c == '/')
        return 2;
    else
        return 0;
}

void StackApplication::IntoPost(string exp) {
    stack<char> st;
    int i=0, j=0;
    string *postfix = new string[exp.length() + 1];
    while(exp[i] != '\0') {
        if(IsOperand(exp[i]))
            postfix[j++] = exp[i++];
        else {
            if(st.empty())
                st.push(exp[i++]);
            else {
                if(Precedence(exp[i]) > Precedence(st.top()))
                    st.push(exp[i++]);
                else {
                    postfix[j++] = st.top();
                    st.pop();
                }
            }
        }
    }
    while(!st.empty()) {
        postfix[j++] = st.top();
        st.pop();
    }
    for(i=0; i<j; i++)
         cout<<postfix[i]<<" ";
    cout<<endl;
}

void StackApplication::PosttoIn(string exp) {
    stack<string> st;
    int i=0;
    string r1, r2, r;
    for(i=0; exp[i] != '\0'; i++) {
        if(IsOperand(exp[i])) {
            r = exp[i];
            st.push(r);
        }
        else {
            r2 = st.top();
            st.pop();
            r1 = st.top();
            st.pop();
            r = "(" + r1 + exp[i] + r2 + ")";
            st.push(r);
        }
    }
    cout<<st.top()<<endl;
}

void StackApplication::Print(bool x) {
    if(x)
        cout<<"Valid String with Parenthesis";
    else
        cout<<"Invalid String with Parenthesis";
    cout<<endl;
}

int main() {
    
    string exp = "((a+b)*(()c-d))";
    string exp1 = "([]){}";
    string exp2 = "a+b*c-d/e";
    string exp3 = "abc*+de/-";
    StackApplication obj;
    
    obj.Print(obj.ParenthesisMatching(exp));
    obj.Print(obj.AllParenthesisMatching(exp1));
    obj.IntoPost(exp2);
    obj.PosttoIn(exp3);
    
    return 0;
}
