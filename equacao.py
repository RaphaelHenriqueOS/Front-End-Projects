''' vamos criar um progrma que calcula o valor da equação de segundo grau dados os seus valores
ax²+bx+c=0
'''

import math

class Equancao2Grau:

    def __init__(self, a, b, c):
        self.__a = a   
        self.__b = b
        self.__c = c

    def get_delta(self):
        # b²-4.a.c
        delta = (self.__b)**2 - 4 * self.__a * self.__c
        return (delta)
            

    def get_baskra(self):
        if (self.get_delta()) < 0:
            print(f'Delta = {self.get_delta()} A Equação não admitie solução real.')
        else:
        # -b +- raiz delta / 2 * a
            positivo = (-(self.__b) + math.sqrt(self.get_delta())) / 2 * self.__a
            negativo = (-(self.__b) - math.sqrt(self.get_delta())) / 2 * self.__a
            print(f' x`= {positivo:.1f} e x`` = {negativo:.1f}')


while True:
    ah = int(input('Informe valor de A, diferente de Zero: '))
    if ah <= 0:
        print('o valor não pode ser menor ou igual a zero')
    else:
        bh = int(input('Informe o valor de b: '))
        ch = int(input('Informe o valor de c: '))
    
        chamando = Equancao2Grau(ah, bh, ch)
        chamando.get_baskra()
        break


