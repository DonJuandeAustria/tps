#include<iostream>
#include<vector>
using namespace std;

class CNumeros{
	
	public:
		vector<int> BuscarNumeroPerfecto(int n);
			
};

vector<int> CNumeros::BuscarNumeroPerfecto(int n){
	int temp=0; 
	vector<int>res;
	
	for(int i=1; i<=n; i++){
		
		for(int j=1; j<i; j++){
			
			if(i%j==0){
				temp+=j;
			}
		}
	
		if(temp==i){
			res.push_back(i);
		}
		temp=0;
	}
	return res;
}

int main(){
	int n;
	
	CNumeros Numeros;
	cout<<"Ingrese un numero: ";
	cin>>n;
	vector<int>res=Numeros.BuscarNumeroPerfecto(n);
	

	for(int i=0; i<res.size(); i++){
		cout<<res[i]<<endl;
	}

	
	
}

