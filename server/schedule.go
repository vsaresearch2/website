package main

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type Schedule struct {
	ID           string    `json:"id"`
	DateCreated  string    `json:"date_created"`
	DateModified string    `json:"date_modified"`
	AcademicYear string    `json:"academic_year"`
	StudentID    string    `json:"student_id"`
	Metadata     Metadata  `json:"metadata"`
	Quarters     []Quarter `json:"quarters"`
}

type Metadata struct {
	//
}

type Quarter struct {
	ID      string   `json:"id"`
	Year    string   `json:"year"`
	Title   string   `json:"title"`
	Courses []Course `json:"courses"`
}

type Course struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

func Routes() *chi.Mux {
	router := chi.NewRouter()
	router.Get("/", GetAllSchedules)
	router.Get("/{scheduleID}", GetASchedule)
	return router
}

func GetAllSchedules(w http.ResponseWriter, r *http.Request) {
	render.JSON(w, r, schedules) // A chi router helper for serializing and returning JSON
}

func GetASchedule(w http.ResponseWriter, r *http.Request) {
	for i, schedule := range schedules {
		if chi.URLParam(r, "scheduleID") == schedule.ID {
			render.JSON(w, r, schedules[i])
			return
		}
	}
	render.JSON(w, r, "No schedule with that ID was found")

}
