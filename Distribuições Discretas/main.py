from tkinter import *
from distridiscretas import DistribuicoesDiscretas

class Janela(DistribuicoesDiscretas):
    def __init__(self):
        self._janela = Tk()
        self._janela.geometry("400x400")

    def voltar_janela_main(self):
        self._resultado.destroy()
        self.janela_main()

    def _janela_binomial(self):
        self._janela.title("Distribuição Binomial")
        self._botaobinomial.destroy()
        self._pergunta.destroy()

        self._tam = Label(self._janela, text="Tamanho da Amonstra (n):")
        self._tam.place(x=40, y=20)
        self._tamresposta = Entry(self._janela)
        self._tamresposta.place(x=40, y=40)

        self._variavel = Label(self._janela, text="Valor desejado (x):")
        self._variavel.place(x=230, y=20)
        self._varresposta = Entry(self._janela)
        self._varresposta.place(x=230, y=40)

        self._probabilidade = Label(self._janela, text="Probabilidade do valor desejado (p):")
        self._probabilidade.place(x=100, y=80)
        self._probabilidaderesposta = Entry(self._janela)
        self._probabilidaderesposta.place(x=130, y=110)

        self._calcular = Button(self._janela, text="Calcular", command=self.calcular_binomial)
        self._calcular.place(x=165, y=180)

        self._resultadolabel = Label(self._janela, text="Resultado:")
        self._resultadolabel.place(x=165, y=130)
        self._resultado = Label(self._janela, text="")
        self._resultado.place(x=180, y=150)

        self._voltar = Button(self._janela, text="Voltar", command=self.voltar_janela_main)
        self._voltar.place(x=10, y=200) 

    def calcular_binomial(self):
        self._n = int(self._tamresposta.get())
        self._x = int(self._varresposta.get())
        self._p = float(self._probabilidaderesposta.get())

        self._resultado["text"] = self.distribuicao_binomial(self._n, self._x, self._p)

    def janela_main(self):
        self._janela.title("Tela Principal")
        self._pergunta = Label(self._janela, text="Qual distribuição deseja calcular?")
        self._pergunta.place(x=10, y=20)

        self._botaobinomial = Button(self._janela, text="Distribuição Binomial", command=self._janela_binomial)
        self._botaobinomial.place(x=10, y=40)

        self._janela.mainloop()

if __name__ == "__main__":
    janela = Janela()
    janela.janela_main()
