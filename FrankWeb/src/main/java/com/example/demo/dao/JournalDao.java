package com.example.demo.dao;

import com.example.demo.bean.Journal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JournalDao extends JpaRepository<Journal, String> {
    Journal findJournalByUsername(String username);

    Journal findJournalByUsernameAndDate(String username, String data);
}
