package main

import (
	"github.com/go-chi/chi"
)

type Preferences struct {
	School string `json:"school"`
}

func Routes() *chi.Mux {
	router := chi.NewRouter()
	router.Get("/", GetAllSchedules)
	router.Get("/{scheduleID}", GetASchedule)
	return router
}
