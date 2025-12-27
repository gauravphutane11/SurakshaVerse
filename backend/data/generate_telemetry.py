import csv
import random
from datetime import datetime, timedelta

random.seed(42)

NUM_EVENTS = 10000
ANOMALY_RATIO = 0.07  # ~7% anomalous

devices = ["LAPTOP-01", "LAPTOP-02", "OFFICE-PC-01", "OFFICE-PC-02"]
users = ["user_001", "user_002", "user_003", "user_004"]

event_types = ["login_attempt", "process_start", "network_connection", "device_change"]

normal_processes = [
    ("chrome.exe", "explorer.exe", 0),
    ("word.exe", "explorer.exe", 0),
    ("excel.exe", "explorer.exe", 0),
    ("code.exe", "explorer.exe", 0),
]

weird_processes = [
    ("xyz123.exe", "cmd.exe", 1),
    ("encryptor.exe", "unknown.exe", 1),
    ("powershell.exe", "cmd.exe", 1),
]

normal_ports = [80, 443, 8080]
weird_ports = [22, 23, 3389, 4444, 5555]

device_types = ["usb", "camera", "unknown"]
actions = ["added", "removed"]


def random_time(start_dt, days=5):
    delta = timedelta(
        days=random.randint(0, days),
        hours=random.randint(0, 23),
        minutes=random.randint(0, 59),
        seconds=random.randint(0, 59),
    )
    return start_dt + delta


def is_work_hours(hour):
    return 9 <= hour <= 18


def generate_event(event_id, base_time):
    device_id = random.choice(devices)
    user_id = random.choice(users)

    ts = random_time(base_time)
    hour = ts.hour
    work_flag = 1 if is_work_hours(hour) else 0

    is_anom = 1 if random.random() < ANOMALY_RATIO else 0
    etype = random.choice(event_types)

    login_result = ""
    login_source = ""
    failed_10 = 0
    process_name = ""
    parent_process = ""
    is_unknown_folder = 0
    dest_port = 0
    dest_country = ""
    bytes_sent = 0
    device_type = ""
    action = ""

    if etype == "login_attempt":
        if is_anom:
            login_result = "failure"
            login_source = "remote"
            failed_10 = random.randint(5, 20)
            ts = ts.replace(hour=random.choice([0, 1, 2, 3, 23]))
        else:
            login_result = random.choices(
                ["success", "failure"], weights=[0.9, 0.1]
            )[0]
            login_source = random.choice(["local", "remote"])
            failed_10 = random.randint(0, 3)

    elif etype == "process_start":
        if is_anom:
            process_name, parent_process, is_unknown_folder = random.choice(
                weird_processes
            )
        else:
            process_name, parent_process, is_unknown_folder = random.choice(
                normal_processes
            )

    elif etype == "network_connection":
        if is_anom:
            dest_port = random.choice(weird_ports)
            dest_country = random.choice(["foreign", "foreign", "domestic"])
            bytes_sent = random.randint(500000, 5000000)
        else:
            dest_port = random.choice(normal_ports)
            dest_country = random.choice(["domestic", "domestic", "foreign"])
            bytes_sent = random.randint(1000, 500000)

    elif etype == "device_change":
        device_type = random.choice(device_types)
        action = random.choice(actions)
        if is_anom and not work_flag:
            device_type = "usb"
            action = "added"

    user_risk_baseline = random.choice([0.2, 0.4, 0.6])

    return {
        "id": event_id,
        "device_id": device_id,
        "user_id": user_id,
        "timestamp": ts.isoformat(),
        "event_type": etype,
        "login_result": login_result,
        "login_source": login_source,
        "failed_attempts_last_10_min": failed_10,
        "process_name": process_name,
        "parent_process": parent_process,
        "is_from_unknown_folder": is_unknown_folder,
        "dest_port": dest_port,
        "dest_country": dest_country,
        "bytes_sent": bytes_sent,
        "device_type": device_type,
        "action": action,
        "hour_of_day": ts.hour,
        "is_work_hours": work_flag,
        "user_risk_baseline": user_risk_baseline,
        "is_anomalous": is_anom,
    }


def main():
    base_time = datetime.now() - timedelta(days=7)
    filename = "telemetry_events.csv"

    fieldnames = [
        "id",
        "device_id",
        "user_id",
        "timestamp",
        "event_type",
        "login_result",
        "login_source",
        "failed_attempts_last_10_min",
        "process_name",
        "parent_process",
        "is_from_unknown_folder",
        "dest_port",
        "dest_country",
        "bytes_sent",
        "device_type",
        "action",
        "hour_of_day",
        "is_work_hours",
        "user_risk_baseline",
        "is_anomalous",
    ]

    with open(filename, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for i in range(1, NUM_EVENTS + 1):
            writer.writerow(generate_event(i, base_time))

    print(f"Generated {NUM_EVENTS} events into {filename}")


if __name__ == "__main__":
    main()
