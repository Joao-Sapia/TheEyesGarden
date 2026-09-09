package school.sptech.TheEyesGarden;

public class Produto {
    private String nome;
    private Categoria categoria;
    private String descricao;
    private Double valor;
    private Integer quantidade;

    public Produto() {
    }

    public Produto(String nome, Categoria categoria, String descricao, Double valor, Integer quantidade) {
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade = quantidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }
}
