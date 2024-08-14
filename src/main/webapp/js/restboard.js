// restboard.js

$(function() {
	listRestBoard();
});

const listRestBoard = function() {
	$.ajax({
		type: 'get',
		url: '/springrest/board',
		success: function(data) {
			printRestBoard(data);
		},
		error: function(err) {
			console.log(err);
		}
	});
}

const printRestBoard = function(data) {
	let tr = '';
	const dataLeng = data.length;
	for (let i=0; i<dataLeng; i++) {
		tr = `<tr><td>${data[i].rbid}</td><td>${data[i].rbwriter}</td>`;
		tr += `<td><a href="javascript:getRestBoard(${data[i].rbid});">${data[i].rbtitle}</a></td>`;
		tr += `<td>${moment(data[i].rbregdate).format("M/D HH:mm")}</td>`;
		tr += `<td><a href="javascript:updateRestBoard('${data[i].rbid}');">수정</a></td>`;
		tr += `<td><a href="javascript:deleteRestBoard('${data[i].rbid}');">삭제</a></td></tr>`;
		$('tbody').append(tr);
	}
}

const insertRestBoard = function() {
	$.ajax({
		type: 'post',
		url: '/springrest/board',
		data: JSON.stringify({
			rbwriter: $('#rbwriter').val(),
			rbtitle: $('#rbtitle').val(),
			rbcontent: $('#rbcontent').val()
		}),
		contentType: 'application/json',
		dataType: 'json',
		success: function() {
			location.href='/springrest/html/listRestBoard.html';
		},
		error: function(err) {
			console.log(err);
		}		
	});
}

const updateRestBoard = function() {
	$.ajax({
		type: 'put',
		url: '/springrest/board',
		data: JSON.stringify({
			rbid: $('#rbid').val(),
			rbwriter: $('#rbwriter').val(),
			rbtitle: $('#rbtitle').val(),
			rbcontent: $('#rbcontent').val()
		}),
		contentType: 'application/json',
		dataType: 'json',
		success: function() {
			location.href='/springrest/html/listRestBoard.html';
		},
		error: function(err) {
			console.log(err);
		}		
	});
}

const deleteRestBoard = function(rbid) {
	$.ajax({
		type: 'delete',
		url: '/springrest/board/' + rbid,
		contentType: 'application/json',
		dataType: 'json',		
		success: function() {
			location.href='/springrest/html/listRestBoard.html';
		},
		error: function(err) {
			console.log(err);
		}		
	});
}

const getRestBoard = function(rbid) {
	$.ajax({
		type: 'get',
		url: '/springrest/board/' + rbid,
		success: function(data) {
			$("#wrapper").html(rbid);
		},
		error: function(err) {
			console.log(err);
		}		
	});
}




















