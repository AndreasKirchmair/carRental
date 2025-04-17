package com.ferchau.carRental.configs;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http
//                .csrf(csrf -> csrf.ignoringRequestMatchers(PathRequest.toH2Console()))
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(PathRequest.toH2Console()).permitAll()
//                        .anyRequest().permitAll()
//                )
//                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin));
//
//        return http.build();
//    }

}
