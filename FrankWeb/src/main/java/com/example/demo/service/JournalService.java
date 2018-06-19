package com.example.demo.service;

import com.example.demo.bean.Journal;
import com.example.demo.dao.JournalDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class JournalService {

    @Autowired
    private JournalDao journalDao;

    @Transactional
    public Journal saveJournal(Journal journal){
        try{
            Journal result = journalDao.save(journal);
            return result;
        } catch (Exception e){
            System.out.println(e.toString());
            return new Journal();
        }
    }

    @Transactional
    public Journal fetchJournal(String id){
        try {
            Journal result = journalDao.findById(id).get();
            return result;
        } catch (Exception e) {
            System.out.println(e.toString());
            return new Journal();
        }
    }
}
