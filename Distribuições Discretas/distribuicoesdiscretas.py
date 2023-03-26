from itertools import combinations, permutations
from math import exp

class DistribuicoesDiscretas:
    def _fatorial(self, n):
        self._n = n
        self.tam_fatorial = list(permutations([i for i in range(self._n)], self._n))
        self._fatorial = len(self.tam_fatorial)

        return self._fatorial

    def _numero_binomial(self, n, k):
        self._n = n
        self._k = k
        self.tamanho = [i for i in range(self._n)]
        self._comb = list(combinations(self.tamanho, self._k))

        return len(self._comb)

    def distribuicao_binomial(self, n, x, p):
        self._binomial = self._numero_binomial(n, x) * (p ** x) * ((1-p) ** (n - x))

        return f"{self._binomial:.2f}"
    
    def distribuicao_hipergeometrica(self, N, n, r, x):
        self._hipergeometrica = (self._numero_binomial(r, x) * self._numero_binomial(N-r, n - x)) / self._numero_binomial(N, n)

        return f"{self._hipergeometrica:.2f}"
    def distribuicao_poisson(self, lam, x):
        self._poisson = ((lam ^ x) * (exp(-lam))) / self._fatorial(x)

        return f"{self._poisson:.2f}"
