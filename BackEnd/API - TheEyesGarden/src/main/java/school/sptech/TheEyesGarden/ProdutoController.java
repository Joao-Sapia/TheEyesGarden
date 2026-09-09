package school.sptech.TheEyesGarden;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Produto")
@CrossOrigin(origins = "http://localhost:5173")

public class ProdutoController {

    private final JdbcTemplate jdbcTemplate;
    public ProdutoController(JdbcTemplate jdbcTemplate) {this.jdbcTemplate = jdbcTemplate;}

    @GetMapping("/Visualizar")
    public ResponseEntity<List<Produto>> ListarProdutosCadastrados(){
        String sql = "SELECT * FROM produto";
        List<Produto> produtos = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Produto.class));
        return ResponseEntity.status(200).body(produtos);
    }

    @PostMapping("/Cadastrar")
    public ResponseEntity<Produto> CadastrarProduto(@RequestBody Produto produtos){

        if (produtos.getNome() == null || produtos.getNome().isBlank()){
            return ResponseEntity.status(400).build();
        } else if (produtos.getDescricao() == null || produtos.getDescricao().isBlank()) {
            return ResponseEntity.status(400).build();
        } else if (produtos.getCategoria() == null) {
            return ResponseEntity.status(400).build();
        } else if (produtos.getValor() == null || produtos.getValor().isNaN()) {
        return ResponseEntity.status(400).build();
        } else if (produtos.getQuantidade() == null) {
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO produto(nome, categoria, descricao, valor, quantidade) VALUES (?,?,?,?,?)";
        return ResponseEntity.status(201).build();

        

    }
}
