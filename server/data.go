package main

// how to deal with retaking a class
// id's need to be unique
var schedules = []Schedule{
	Schedule{
		ID:           "1",
		DateCreated:  "1542760415982",
		DateModified: "1543760415982",
		AcademicYear: "2018",
		StudentID:    "123456789",
		Metadata:     Metadata{},
		Quarters: []Quarter{
			Quarter{
				ID:    "autumn-2018",
				Title: "Autumn 2018",
				Year:  "2018",
				Courses: []Course{
					Course{
						ID:          "css-350",
						Title:       "CSS 350",
						Description: "A description about CSS 350",
					},
					Course{
						ID:          "css-342",
						Title:       "CSS 342",
						Description: "A description about CSS 342",
					},
					Course{
						ID:          "css-201",
						Title:       "CSS 201",
						Description: "A description about CSS 201",
					},
					Course{
						ID:          "css-1xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
					Course{
						ID:          "css-2xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
			Quarter{
				ID:    "winter-2018",
				Title: "Winter 2018",
				Year:  "2018",
				Courses: []Course{
					Course{
						ID:          "css-340",
						Title:       "CSS 340",
						Description: "A description about CSS 340",
					},
					Course{
						ID:          "css-343",
						Title:       "CSS 343",
						Description: "A description about CSS 343",
					},
					Course{
						ID:          "css-310",
						Title:       "CSS 310",
						Description: "A description about CSS 310",
					},
					Course{
						ID:          "css-3xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
			Quarter{
				ID:    "spring-2019",
				Title: "Spring 2019",
				Year:  "2019",
				Courses: []Course{
					Course{
						ID:          "css-330",
						Title:       "CSS 330",
						Description: "A description about CSS 330",
					},
					Course{
						ID:          "css-360",
						Title:       "CSS 360",
						Description: "A description about CSS 360",
					},
					Course{
						ID:          "css-210",
						Title:       "CSS 210",
						Description: "A description about CSS 210",
					},
					Course{
						ID:          "css-4xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
			Quarter{
				ID:      "summer-2019",
				Title:   "Summer 2019",
				Year:    "2019",
				Courses: []Course{},
			},
			Quarter{
				ID:    "autumn-2019",
				Title: "Autumn 2019",
				Year:  "2019",
				Courses: []Course{
					Course{
						ID:          "css-422",
						Title:       "CSS 422",
						Description: "A description about CSS 422",
					},
					Course{
						ID:          "css-5xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
			Quarter{
				ID:    "winter-2019",
				Title: "Winter 2019",
				Year:  "2019",
				Courses: []Course{
					Course{
						ID:          "css-430",
						Title:       "CSS 430",
						Description: "A description about CSS 430",
					},
				},
			},
			Quarter{
				ID:    "spring-2020",
				Title: "Spring 2020",
				Year:  "2020",
				Courses: []Course{
					Course{
						ID:          "css-497",
						Title:       "CSS 497",
						Description: "A description about CSS 497",
					},
					Course{
						ID:          "css-6xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
			Quarter{
				ID:      "summer-2020",
				Title:   "Summer 2020",
				Year:    "2020",
				Courses: []Course{},
			},
			Quarter{
				ID:    "autumn-2020",
				Title: "Autumn 2020",
				Year:  "2020",
				Courses: []Course{
					Course{
						ID:          "css-530",
						Title:       "CSS 530",
						Description: "A description about CSS 530",
					},
					Course{
						ID:          "css-7xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
			Quarter{
				ID:    "winter-2020",
				Title: "Winter 2020",
				Year:  "2020",
				Courses: []Course{
					Course{
						ID:          "css-601",
						Title:       "CSS 601",
						Description: "A description about CSS 601",
					},
				},
			},
			Quarter{
				ID:    "spring-2021",
				Title: "Spring 2021",
				Year:  "2021",
				Courses: []Course{
					Course{
						ID:          "css-520",
						Title:       "CSS 520",
						Description: "A description about CSS 520",
					},
					Course{
						ID:          "css-8xx",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
			Quarter{
				ID:      "summer-2021",
				Title:   "Summer 2021",
				Year:    "2021",
				Courses: []Course{},
			},
		},
	},
	Schedule{
		ID:           "2",
		DateCreated:  "1542760415982",
		DateModified: "1543760415982",
		AcademicYear: "2018",
		StudentID:    "123654789",
		Metadata:     Metadata{},
		Quarters: []Quarter{
			Quarter{
				ID:    "autumn",
				Title: "Autumn 2018",
				Year:  "2018",
				Courses: []Course{
					Course{
						ID:          "course-1",
						Title:       "CSS 350",
						Description: "A description about CSS 350",
					},
					Course{
						ID:          "course-2",
						Title:       "CSS 342",
						Description: "A description about CSS 342",
					},
					Course{
						ID:          "course-3",
						Title:       "CSS 201",
						Description: "A description about CSS 201",
					},
					Course{
						ID:          "course-4",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
		},
	},
	Schedule{
		ID:           "3",
		DateCreated:  "1542760415982",
		DateModified: "1543760415982",
		AcademicYear: "2018",
		StudentID:    "123456987",
		Metadata:     Metadata{},
		Quarters: []Quarter{
			Quarter{
				ID:    "autumn",
				Title: "Autumn 2016",
				Year:  "2016",
				Courses: []Course{
					Course{
						ID:          "course-1",
						Title:       "CSS 350",
						Description: "A description about CSS 350",
					},
					Course{
						ID:          "course-2",
						Title:       "CSS 342",
						Description: "A description about CSS 342",
					},
					Course{
						ID:          "course-3",
						Title:       "CSS 201",
						Description: "A description about CSS 201",
					},
					Course{
						ID:          "course-4",
						Title:       "ELECTIVE",
						Description: "A description about ELECTIVE",
					},
				},
			},
		},
	},
}
