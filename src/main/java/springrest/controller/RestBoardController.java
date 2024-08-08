package springrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import springrest.service.RestBoardService;

@Controller
public class RestBoardController {

	@Autowired
	private RestBoardService restBoardService;
	
}
