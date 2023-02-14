palavra = list(input("Digite a palavra a ser usada: ").lower())
acertos_jogador = ["*" for i in range(len(palavra))]

chances = 3

while True:
    jogador = input("Digite uma letra: ").lower()
    if jogador in palavra:
        for i, letra in enumerate(palavra):
            if jogador == letra:
                acertos_jogador[i] = jogador
        print("Acertou uma letra!!!")
        print(acertos_jogador)

    else:
        chances -= 1
        print("Errou uma letra")

    if chances == 0:
        print("Você perdeu :( ")
        break

    if acertos_jogador == palavra:
        print("Parabéns, você ganhou!!!")
        break
