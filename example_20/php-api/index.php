<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include_once 'config.php';

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
        $query = "SELECT id, name, age, grade FROM students WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    } else {
        $query = "SELECT id, name, age, grade FROM students";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }
}

function add_student()
{
    global $conn;
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $age = $data->age;
    $grade = $data->grade;

    $query = "INSERT INTO students SET name = :name, age = :age, grade = :grade";
    $stmt = $conn->prepare($query);

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':age', $age);
    $stmt->bindParam(':grade', $grade);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Student added successfully."]);
    } else {
        echo json_encode(["message" => "Unable to add student."]);
    }

}

function delete_student()
{
    global $conn;
    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;

    $query = "DELETE FROM students WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Student deleted successfully."]);
    } else {
        echo json_encode(["message" => "Unable to delete student."]);
    }
}

function update_student()
{
    global $conn;
    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;
    $name = $data->name;
    $age = $data->age;
    $grade = $data->grade;

    $query = "UPDATE students SET name = :name, age = :age, grade = :grade WHERE id = :id";
    $stmt = $conn->prepare($query);

    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':age', $age);
    $stmt->bindParam(':grade', $grade);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Student updated successfully."]);
    } else {
        echo json_encode(["message" => "Unable to update student."]);
    }
}

?>
