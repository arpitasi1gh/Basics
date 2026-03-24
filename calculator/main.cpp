#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

double multiply(double a, double b)
{
    return a * b;
}
double addition(double a, double b)
{
    return a + b;
}
double subtract(double a, double b)
{
    return a - b;
}
void calcDivison(double a, double b)
{
    if (b == 0)
    {
        cout << "zero division error\n";
    }
    else
    {
        cout << a / b;
    }
}
double power(double a, double b)
{
    int power = 1;
    for (int i = 1; i <= b; i++)
    {
        power *= a;
    }
    return power;
}
int calcModulus(int a, int b)
{
    return a % b;
}

int main()
{
    double a;
    double b;
    char c;
    bool isRunning = true;
    while (isRunning)
    {
        cout << "\nFollow this exact format: number_1 number2 operator_symbol_(* + - / ^ %)\nTo exit this calculator enter 3rd value as: q\n\nEnter: ";
        cin >> a >> b >> c;
        switch (c) {
            case 'q': isRunning = false; break;
            case '*': cout << "\nAnswer: " << multiply(a, b) << "\n"; break;
            case '+': cout << "\nAnswer: " << addition(a, b) << "\n"; break;
            case '-': cout << "\nAnswer: " << subtract(a, b) << "\n"; break;
            case '%': cout << "\nAnswer: " << calcModulus(a, b) << "\n"; break;
            case '/': cout << "\nAnswer: "; calcDivison(a, b); cout << "\n"; break;
            case '^': cout << "\nAnswer: " << power(a, b) << "\n"; break;
            default: cout << "\nError: Enter valid operator!\n\n"; break;
        }
    }
    cout << "\nThanks for Calculating!\n\n";

    return 0;
}