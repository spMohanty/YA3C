from gevent import monkey
monkey.patch_all()

import time
from threading import Thread
from flask import Flask, render_template, session, request
from flask.ext.socketio import SocketIO, emit, join_room, leave_room, \
    close_room, disconnect

import redis

p = redis.ConnectionPool()


app = Flask(__name__, static_folder='static')
app.debug = True
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)
thread = None


def background_thread():
    """Example of how to send server generated events to clients."""
    # count = 0
    # while True:
    #     time.sleep(10)
    #     count += 1
    #     socketio.emit('my response',
    #                   {'data': 'Server generated event', 'count': count},
    #                   namespace='/test')


@app.route('/')
def index():
    global thread
    if thread is None:
        thread = Thread(target=background_thread)
        thread.start()
    return render_template('index.html')


@app.route('/receiver/<path:path>')
def receiver(path):
    return render_template('receiver/'+path+".html")

@app.route('/app/<path:path>')
def app_renderer(path):
    return render_template('app/'+path+".html")



# =================================================================
"""
    Socket.io stream receiver for heart app
"""
# =================================================================

@socketio.on('YA3C::heart::GYRO_STREAM', namespace='/heart')
def heart_gyro_receiver(message):
    r = redis.Redis(connection_pool=p)
    # Publish data on Redis PUB-SUB Channel
    r.publish('YA3C::heart::GYRO_STREAM', message)
    # Broadcast data to all connected clients
    emit('YA3C::heart::GYRO_STREAM', message, broadcast=True)


@socketio.on('YA3C::heart::ACCEL_STREAM', namespace='/heart')
def heart_gyro_receiver(message):
    r = redis.Redis(connection_pool=p)
    # Publish data on Redis PUB-SUB Channel    
    r.publish('YA3C::heart::ACCEL_STREAM', message)
    # Broadcast data to all connected clients
    emit('YA3C::heart::ACCEL_STREAM', message, broadcast=True)

@socketio.on('YA3C::heart::COMMANDS', namespace='/heart')
def heart_commands_receiver(message):
    r = redis.Redis(connection_pool=p)
    # Publish data on Redis PUB-SUB Channel    
    r.publish('YA3C::heart::COMMANDS', message)
    # Broadcast data to all connected clients
    emit('YA3C::heart::COMMANDS', message, broadcast=True)



# =================================================================
# =================================================================

# # =================================================================
# """
#     Socket.io stream receiver for openArena app
# """
# # =================================================================

# @socketio.on('YA3C::openArena::GYRO_STREAM', namespace='/openArena')
# def openArena_gyro_receiver(message):
#     r = redis.Redis(connection_pool=p)
#     # Publish data on Redis PUB-SUB Channel
#     r.publish('YA3C::openArena::GYRO_STREAM', message)
#     # Broadcast data to all connected clients
#     emit('YA3C::openArena::GYRO_STREAM', message, broadcast=True)


# @socketio.on('YA3C::openArena::ACCEL_STREAM', namespace='/openArena')
# def openArena_gyro_receiver(message):
#     r = redis.Redis(connection_pool=p)
#     # Publish data on Redis PUB-SUB Channel    
#     r.publish('YA3C::openArena::ACCEL_STREAM', message)
#     # Broadcast data to all connected clients
#     emit('YA3C::openArena::ACCEL_STREAM', message, broadcast=True)

# @socketio.on('YA3C::openArena::COMMANDS', namespace='/openArena')
# def openArena_commands_receiver(message):
#     r = redis.Redis(connection_pool=p)
#     # Publish data on Redis PUB-SUB Channel    
#     r.publish('YA3C::openArena::COMMANDS', message)
#     # Broadcast data to all connected clients
#     emit('YA3C::openArena::COMMANDS', message, broadcast=True)

# # =================================================================
# #    Helper Functions for openArena app 
# # =================================================================

# #Change these values if accelerometer reading are different:
# #How far the accerometer is tilted before
# #starting to move the mouse:
# MovementThreshold = 18;
 
# #The average zero acceleration values read
# #from the accelerometer for each axis:
# ZeroXValue = 0;
# ZeroYValue = 0;
# #ZeroZValue = 0;
 
# #The maximum (positive) acceleration values read
# #from the accelerometer for each axis:
# MaxXValue = 10;
# MaxYValue = 10;
# #MaxZValue = 4096;
 
# #The minimum (negative) acceleration values read
# #from the accelerometer for each axis:
# MinXValue = -10;
# MinYValue = -10;
# #MinZValue = -4096;
 
# #The sign of the mouse movement relative to the acceleration.
# #If your cursor is going in the opposite direction you think it
# #should go, change the sign for the appropriate axis.
# XSign = 1;
# YSign = 1;
# #ZSign = 1;
 
# #The maximum speed in each axis (x and y)
# #that the cursor should move. Set this to a higher or lower
# #number if the cursor does not move fast enough or is too fast.
# MaxMouseMovement = 500;  
 
# #This reduces the 'twitchiness' of the cursor by calling
# #a delay function at the end of the main loop.
# #There are better way to do this without delaying the whole
# #microcontroller, but that is left for another tutorial or project.
# MouseDelay = 12;
# # =================================================================
# # =================================================================


@socketio.on('my event', namespace='/test')
def test_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my response',
         {'data': message['data'], 'count': session['receive_count']})


@socketio.on('my broadcast event', namespace='/test')
def test_broadcast_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my response',
         {'data': message['data'], 'count': session['receive_count']},
         broadcast=True)


@socketio.on('join', namespace='/test')
def join(message):
    join_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my response',
         {'data': 'In rooms: ' + ', '.join(request.namespace.rooms),
          'count': session['receive_count']})


@socketio.on('leave', namespace='/test')
def leave(message):
    leave_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my response',
         {'data': 'In rooms: ' + ', '.join(request.namespace.rooms),
          'count': session['receive_count']})


@socketio.on('close room', namespace='/test')
def close(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my response', {'data': 'Room ' + message['room'] + ' is closing.',
                         'count': session['receive_count']},
         room=message['room'])
    close_room(message['room'])


@socketio.on('my room event', namespace='/test')
def send_room_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my response',
         {'data': message['data'], 'count': session['receive_count']},
         room=message['room'])


@socketio.on('disconnect request', namespace='/test')
def disconnect_request():
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my response',
         {'data': 'Disconnected!', 'count': session['receive_count']})
    disconnect()


@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected', 'count': 0})


@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected')


if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0")
