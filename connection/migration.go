package connection

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4"
)

var Conn *pgx.Conn

func DatabaseConnect() {
	databaseUrl := "postgres://postgres:firehouse0@localhost:5432/Personal-Web-B45"

	var err error
	Conn, err = pgx.Connect(context.Background(), databaseUrl)
	if err != nil {
		fmt.Fprintf(os.Stderr, "gagal terhubung ke DB : %v\n", err)
		os.Exit(1)
	}
	fmt.Println("Sukses terhubung ke DB")
}
