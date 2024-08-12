package springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import springrest.domain.RestBoard;
import springrest.service.RestBoardService;

@RestController
public class RestBoardController {

	@Autowired
	private RestBoardService restBoardService; 
	
	@GetMapping(value="/board")
	public ResponseEntity<List<RestBoard>> listRestBoard() throws Exception {
		List<RestBoard> restBoardList = restBoardService.listRestBoard();
		return ResponseEntity.ok(restBoardList);
	}
	
	@GetMapping(value="/board/{rbid}")
	public ResponseEntity<RestBoard> getRestBoard(@PathVariable int rbid) throws Exception {
		RestBoard restBoard = restBoardService.getRestBoard(rbid);
		return ResponseEntity.ok(restBoard);
	}	
	
	@PostMapping(value="/board", produces = MediaType.APPLICATION_JSON_VALUE)
	public int insertRestBoard(@RequestBody RestBoard restBoard) throws Exception {
		return restBoardService.insertRestBoard(restBoard);
	}
	
	@PutMapping(value="/board", produces = MediaType.APPLICATION_JSON_VALUE)
	public int updateRestBoard(@RequestBody RestBoard restBoard) throws Exception {
		return restBoardService.updateRestBoard(restBoard);
	}
	
	@DeleteMapping(value="/board/{rbid}")
	public int deleteRestBoard(@PathVariable int rbid) throws Exception {
		return restBoardService.deleteRestBoard(rbid);
	}	
	
}














