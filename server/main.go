package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/go-chi/render"
)

// https://tutorialedge.net/golang/consuming-restful-api-with-go/
func Router() *chi.Mux {
	router := chi.NewRouter()

	cors := cors.New(cors.Options{
		// AllowedOrigins: []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	})

	router.Use(
		render.SetContentType(render.ContentTypeJSON), // Set Content-Type headers as application/JSON
		cors.Handler,
		middleware.Logger,          // Log API request calls
		middleware.DefaultCompress, // Compress results, mostly gzipping assets and JSON
		middleware.RedirectSlashes, // Redirect slashes to no slash URL versions
		middleware.Recoverer,       // Recover from panics without crashing the server
	)
	// e.g. http://api.website-name.com/v1/... or website.com/api/v1
	// e.g. http://pokeapi.co/api/v2/pokedex/kanto
	router.Route("/api", func(r chi.Router) {
		r.Mount("/v1/schedules", Routes())
	})
    // https://www.keycdn.com/support/put-vs-post
    // use POST for preferences since no user ID
	return router
}

func main() {
	router := Router()

	walkFunc := func(method string, route string, handler http.Handler, middlewares ...func(http.Handler) http.Handler) error {
		log.Printf("%s %s\n", method, route) // Walk and print out all the routes
		return nil
	}
	if err := chi.Walk(router, walkFunc); err != nil {
		log.Panicf("Logging error: %s\n", err.Error()) // panic if there is an error
	}

	// React runs on port 3000
	log.Fatal(http.ListenAndServe(":3001", router)) // Note, the port is usually gotten from the environment
}
