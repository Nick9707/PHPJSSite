<?php
/**
 * Created by PhpStorm.
 * User: nick
 * Date: 07/11/18
 * Time: 1:35 PM
 */

require_once('DBConnection.php');
DEFINE ('DATABASE', 'BE');

class WorkWithDB
{

    private $conn;

    /**
     * @return mixed
     */
    public function getConn()
    {
        return $this->conn;
    }

    /**
     * @param mixed $conn
     */
    public function setConn($conn): void
    {
        $this->conn = $conn;
    }

    /**
     * WorkWithDB constructor.
     */
    public function __construct($conn)
    {
        $this->conn = $conn;
    }
    function useDB(){
        if(!mysqli_real_query($this->conn, "use BE")){
            echo nl2br("Error in using db: " . $conn -> error . "\n");
        }
    }

    function addUser($userName, $Password){
        if(!mysqli_real_query($this->conn, "insert into ")){

        }
    }
}