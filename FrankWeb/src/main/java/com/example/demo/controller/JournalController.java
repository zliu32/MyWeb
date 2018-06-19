package com.example.demo.controller;

import com.example.demo.bean.Journal;
import com.example.demo.service.JournalService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;

@Controller
@RequestMapping("/journal")
@CrossOrigin
public class JournalController {

    @Autowired
    private JournalService journalService;

    @RequestMapping("/save")
    @ResponseBody
    @CrossOrigin
    @ApiOperation(value = "保存日记", notes = "保存日期", httpMethod = "POST")
    public Journal saveJournal(@RequestBody Journal journal){
        return this.journalService.saveJournal(journal);
    }

    @RequestMapping("/fetch")
    @ResponseBody
    @CrossOrigin
    @ApiOperation(value = "获取日记", notes = "获取日记", httpMethod = "POST")
    public Journal fetchJournal(@RequestBody String id){
        Journal result = this.journalService.fetchJournal(id);
        return result;
    }
}
