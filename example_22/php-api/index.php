<?php
$host = "localhost";
$db_name = "hafeez_db";
$username = "root";
$password = "";
$conn = new mysqli($host, $username, $password, $db_name);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");


$request_method = $_SERVER["REQUEST_METHOD"];
switch ($request_method) {
    case 'GET':
        get_students();
        break;
    case 'POST':
        $action = isset($_GET['action']) ? $_GET['action'] : '';
        if ($action === 'delete') {
            delete_student();
        } elseif ($action === 'update') {
            update_student();
        } else {
            add_student();
        }
        break;
}


function get_students()
{
    global $conn;
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    $action = isset($_GET['action']) ? $_GET['action'] : '';
    if ($action === 'edit' && !empty($id)) {
        $query = "SELECT * FROM students WHERE id = $id";
        $result = $conn->query($query);
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
    } else {
        $query = "SELECT * FROM students";
        $result = $conn->query($query);
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
    }
}

function add_student()
{
    global $conn;
    $name = $_POST['name'];
    $age = $_POST['age'];
    $grade = $_POST['grade'];
    $image = $_FILES['image'];

    $timestamp = time();
    $extension = pathinfo($image['name'], PATHINFO_EXTENSION);
    $imageName = $timestamp . '.' . $extension;

    $uploadDir = 'upload/';
    $uploadPath = $uploadDir . $imageName;

    if (move_uploaded_file($image['tmp_name'], $uploadPath)) {
        $query = "INSERT INTO students SET name = '$name', age = $age, grade = '$grade', image_path = '$imageName'";
        if ($conn->query($query) === TRUE) {
            echo json_encode(["message" => "Student added successfully."]);
        } else {
            echo json_encode(["message" => "Unable to add student. Execute failed."]);
        }
    } else {
        echo json_encode(["message" => "File upload failed."]);
    }
}

function delete_student()
{
    global $conn;
    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;

    $query = "DELETE FROM students WHERE id = $id";
    if ($conn->query($query) === TRUE) {
        echo json_encode(["message" => "Student deleted successfully."]);
    } else {
        echo json_encode(["message" => "Unable to delete student."]);
    }
}

function update_student()
{
    global $conn;
    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $grade = $_POST['grade'];

    if (isset($_FILES['image']) && $_FILES['image']['size'] > 0) {
        $image = $_FILES['image'];
        $timestamp = time();
        $extension = pathinfo($image['name'], PATHINFO_EXTENSION);
        $imageName = $timestamp . '.' . $extension;
        $uploadDir = 'upload/';
        $uploadPath = $uploadDir . $imageName;

        if (move_uploaded_file($image['tmp_name'], $uploadPath)) {
            $query = "UPDATE students SET name = '$name', age = $age, grade = '$grade', image_path = '$imageName' WHERE id = $id";
            if ($conn->query($query) === TRUE) {
                echo json_encode(["message" => "Student updated successfully."]);
            } else {
                echo json_encode(["message" => "Unable to update student with image. Execute failed."]);
            }
        } else {
            echo json_encode(["message" => "File upload failed."]);
        }
    } else {
        $query = "UPDATE students SET name = '$name', age = $age, grade = '$grade' WHERE id = $id";
        if ($conn->query($query) === TRUE) {
            echo json_encode(["message" => "Student updated successfully without changing the image."]);
        } else {
            echo json_encode(["message" => "Unable to update student without changing the image. Execute failed."]);
        }
    }
}

$conn->close();
?>
